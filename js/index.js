function insert(num){
			document.calc.textview.value=document.calc.textview.value+num;
		}
		//Function to calculate the total
		function total(num2){
		document.calc.textview.value=eval(document.calc.textview.value);
		}
		//Function to clear
		function c(){
		document.calc.textview.value="";
		}