import React from 'react';
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import FlipMove from 'react-flip-move';
import { connect } from 'react-redux';

class ListItems extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(`props`, this.props);
        let { items } = this.props
        const listItems = items && items.length > 0 && items.map(item => {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text" id={item.key} value={item.text}
                        onChange={(e) => {
                            this.props.setUpdate({ text: e.target.value, key: item.key })
                        }}
                    />
                    <span>
                        <FontAwesomeIcon className="faicons"
                            onClick={() => {
                                this.props.deleteItem(item.key)
                            }}
                            icon="trash" />
                    </span>
                </p>

            </div>
        })
        // return <div>
        //     <FlipMove duration={300} easing="ease-in-out">
        //         {listItems}
        //     </FlipMove>

        // </div>;
        return (
            <div>{listItems} </div>
        )
    }
}
const mapStateToProps = state => {
    console.log(`sate`, state);
    return {
        items: state.items,
        currentItem: state.currentItem
    }
}

export default connect(mapStateToProps, {})(ListItems)
// function ListItems(props) {
//     const items = props.items;
//     const listItems = items.map(item => {
//         return <div className="list" key={item.key}>
//             <p>
//                 <input type="text" id={item.key} value={item.text} onChange={(e) => {
//                     props.setUpdate(e.target.value, item.key)
//                 }} />
//                 <span>

//                     <FontAwesomeIcon className="faicons" onClick={() => {
//                         props.deleteItem(item.key)
//                     }} icon="trash" />
//                 </span>
//             </p>

//         </div>
//     })
//     return <div>
//         <FlipMove duration={300} easing="ease-in-out">
//             {listItems}
//         </FlipMove>

//     </div>;
// }