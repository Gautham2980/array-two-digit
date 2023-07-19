var arr=[1,2,3,4,5,55,40,60,70,80,66,78,99,85,77]
document.write("The given number is"+arr)
document.write("<br>")
document.write("The Two Digit Number:")
document.write("<br>")
for(let i=0;i<arr.length;i++)
{
	if((arr[i]>=10)&&(arr[i])<=99){
		document.write(arr[i]);
		document.write("<br>")
	}
	
}