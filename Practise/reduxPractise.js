
console.clear()
//action
const createProfile = (name, cost) => {
   return {
     type: 'CREATE_PROFILE',
     payload: {name: name, cost: cost}
   }
 }

 const deleteProfile = (name) => {
   return {
     type: 'DELETE_PROFILE',
     payload: {name: name}

   }
 }

 const createClaim = (name, cost) => {
   return {
     type: 'CREATE_CLAIM',
     payload: {name: name,
               cost:cost
              }

   }
 }

 // reducer

 const profiles = (memberList = [], action) => {
   if (action.type === 'CREATE_PROFILE') {
     // console.log(action)
     return [...memberList, action.payload.name]
   }else if (action.type === 'DELETE_PROFILE') {
     return memberList.filter(item => item !== action.payload.name)
   } else {
     return memberList
   }
 }

  const claim = (claimList = [], action)  => {
   if(action.type === 'CREATE_CLAIM') {
     // console.log(action)
     return [...claimList, action.payload];
   } else {
     return claimList
   }
 }


 const money = (money = 100, action) => {
   if (action.type === 'CREATE_PROFILE') {
     return money + action.payload.cost;
   }
   else if(action.type === 'CREATE_CLAIM') {
     return money - action.payload.cost;
   } else {
     return money;
   }
 };

// conbine Reducer and create Store
const {createStore, combineReducers} = Redux

const allDepartment = combineReducers({
  profiles : profiles,
  claim : claim,
  money : money
})



const store = createStore(allDepartment)
// store.dispatch (createClaim('alex', 299))

store.dispatch(createProfile('alex', 200))
store.dispatch(createProfile('john', 200))
store.dispatch(createProfile('lucia', 200))
store.dispatch(createProfile('lisa', 200))
store.dispatch(createClaim('alex', 500))
store.dispatch(deleteProfile('alex'))



console.log(store.getState())