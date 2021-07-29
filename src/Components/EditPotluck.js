import React, {useState, useEffect} from "react"
import {axiosWithAuth} from "../axiosWithAuth"
import {useHistory} from "react-router-dom"

const initialState = {potluck_name: "", potluck_date: "", potluck_time: "", potluck_location: "", organizer: "", food: ""}

function DeleteItems(props) {
    const {obj, currItems, setCurrItems}= props
    const deleteItemClick = (id) => {
        axiosWithAuth().delete(`https://potluck-back-end.herokuapp.com/api/potlucks${id}`) //potluck items api
        setCurrItems(currItems.filter(item=>item.itemid!==id))
      }
    return (
        <button onClick={()=>deleteItemClick(obj.itemid)}>-</button>)
    }

function EditPotluck() {
    const [form, setForm] = useState(initialState)
    const [potluckData, setPotluckData] = useState({})
    const [currItems, setCurrItems] = useState([])
    const [newItem, setNewItem] = useState({name: "", guest: "", picked: false})

    const history = useHistory()
    const {id} = useParams()

    useEffect(() => {
        axiosWithAuth().get(`https://potluck-back-end.herokuapp.com/api/potlucks${id}`) //ptluck api
        .then(res=>{
          console.log(res)
          setPotluckData(res.data)
          // const itemsArr = res.data.items.map(obj=>obj.name)
          // const itemsArrToString = itemsArr.join(", ")
          setForm({...form, name: res.data.name, date: res.data.date, time: res.data.time, location: res.data.location})
          setCurrItems(res.data.items)
        })
        .catch(err=>console.log(err))
      },[])
  
      // console.log(currUser)

      const formChangeHandler = (e) => {
        setForm({...form,
          [e.target.name]: e.target.value})
      }
  
      const itemChangeHandler = (e) => {
        setNewItem({...newItem,
          [e.target.name]: e.target.value})
      }
  
      const formSubmit = (e) => {
        e.preventDefault();
        // const itemsStringArray = form.items.split(",").map(item=>item.trim())
        // const itemsArray = itemsStringArray.map(item=>{
        //   return {itemid: Date.now(), name: item, guest: "", picked: false}
        // })
        // console.log(itemsArray)
        const editedPotluck = {...potluckData, name: form.name, location: form.location, date: form.date, time: form.time, items: []}
        console.log("edited: ",editedPotluck)
        axiosWithAuth().put(`https://potluck-back-end.herokuapp.com/api/potlucks${id}`, editedPotluck) //potluck api
          .then(res=>{
            console.log(res);
            history.push("/MyPotlucks") //MyPotluck
          })
          .catch(err=>console.log(err))
        
      }
  
        const newItemClick = () => {
          const createdItem={items: [newItem]}
          axiosWithAuth().put(`https://potluck-back-end.herokuapp.com/api/potlucks${id}`, createdItem) //potluck api
          setCurrItems([...currItems, newItem])
          setNewItem({name: "", guest: "", picked: false})
        }

    return (
        <form onSubmit={formSubmit}> 
            <label>
                Name
                <input
                  onChange={formChangeHandler}
                  value={form.name}
                  placeholder="Potluck Name"
                  name="name"
                  type="text"
                  required
                /></label>
            <label>
                Date
                <input
                  onChange={formChangeHandler}
                  value={form.date}
                  placeholder="Potluck Date"
                  name="date"
                  type="text"
                  required
                /></label>
            <label>
                Time
                <input
                  onChange={formChangeHandler}
                  value={form.time}
                  placeholder="Potluck Time"
                  name="time"
                  type="text"
                  required
                /></label>
            <label>
                Location
                <input
                  onChange={formChangeHandler}
                  value={form.location}
                  placeholder="Potluck Address"
                  name="location"
                  type="text"
                  required
            /></label>
            <p>Food and Beverages</p>
                <div>
                {currItems.length<1 ? <p>No Items in Potluck. Add items below.</p> : currItems.map((obj) => {
                  return (
                    <DeleteItems obj={obj} setCurrItems={setCurrItems} currItems={currItems} />
                    )})
                }
                </div>
                <div>
                <button onClick={newItemClick}>+</button>
                <input
                  onChange={itemChangeHandler}
                  value={newItem.name}
                  placeholder="New Item"
                  name="name"
                  type="text"
                  required
                 /></div> 
                 <button>Save Changes</button>
        </form>
    )
}

export default EditPotluck