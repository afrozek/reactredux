import React, { Component} from 'react';
import { connect } from 'react-redux';

class UserList extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.users)
         
        const users = this.props.users.map((user, index) =>{
            return (
                <li 
                    key={index}
                    onClick={()=>{this.setState({selectedUser: user})}}
                    
                >
                    {user.email}
                </li>
            )
         });  

         this.state = {
             users: users,
             selectedUser: this.props.users[0]
         };

         console.log(users)


        
    }

  
    render() {
        return (
            <div>
                <h3>User List</h3>
                <h2>selected: {this.state.selectedUser.email}</h2>
                <ul>
                    <li>
                        hi
                    </li>
                    <li>{this.props.users.length}</li>
                    {this.state.users}
                </ul>
            </div>
        )
    }

}

export default UserList;

// function mapStateToProps(state) {
//     return{
//         users: state.users
//     }
// }

// export default connect(mapStateToProps)(UserList)