var name_of_student_array=[];

function submit() {
var display_of_student_array=[];

for (var j = 1; j <=4; j++) {
 
    var temp=document.getElementById("name_of_the_student_"+j).value;
    console.log(temp);
    name_of_student_array.push(temp);
}
var length =name_of_student_array.length;
console.log(length);

for (var k = 0; k <length; k++) {
    display_of_student_array.push("<h4>name-"+name_of_student_array[k]+"</h4>");
    }
 console.log(display_of_student_array);

 document.getElementById("display_name_with_commas").innerHTML=display_of_student_array;

 var remove_commas= display_of_student_array.join(" ");
 console.log(remove_commas);
 document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}

