import { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Item from './Item'

class ItemList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
            {
                item: "Samsung TV",
                donatedBy: "Mohammed",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/Samsung.jpg"
            },
            {
                item: "Shose",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/shose.jpg"
            },
            {
                item: "Sofa",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/sofa.jpg"
            },
            {
                item: "Book",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/book.jpg"
            },
            {
                item: "Samsung TV",
                email: "mohakemal9@gmail.com",
                thumbnail: "../assets/samsung.jpg"
            }
          ]
        }
    }

    render() {
    	const { items } = this.state
        return (
            <div className="item-list">
                <h1>Items Ready For Donation</h1>
                {items.map(
                	(data, i) =>
                		<Item key={i}
                				onClick={email => console.log(email)}
                				{...data} />
                	 )}
            </div>
        )
    }
}

export default ItemList
