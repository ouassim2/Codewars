/*solution

function expandedForm(num) {
 let array = num.toString().split("")
 let result = []
 
 array.reverse().forEach((e,index) => {
   if(e > 0){
   result.push( e + '0'.repeat( index ) )
   }
 })
 return result.reverse().join(' + ').toString()
}

*/

function expandedForm(num) {
    let array = num.toString().split("")
    let result = []
    
    array.reverse().forEach((e,index) => {
      if(e > 0){
      result.push( e + '0'.repeat( index ) )
      }
    })
    return result.reverse().join(' + ').toString()
   }