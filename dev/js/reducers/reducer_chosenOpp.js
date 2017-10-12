export default function (state = null, action) {
   switch (action.type) {
       case 'OPEN_ONE_OPP':
           return action.payload;
           break;
   }
   return state;
}
