function getInputValue(id){
    const inputField=document.getElementById(id);
    const value=parseInt(inputField.value); 
    // console.log(value);
    if(isNaN(value) || value<0){
        inputField.value='';
    }
    else{
        return value;
    }
}

function getPleyersBudget(){
    const playersParent=document.getElementById('order_list');
    const players=playersParent.childNodes.length;

    const budget=getInputValue('budget_input_field');
    if(isNaN(budget) || budget<0){
        alert('Enter Your Perfect Amount');
        return '';
    }
    else{
        const finalBudget=budget*players;
        return finalBudget;
    }
}

function othersBudget(othersId){
    const budget=getInputValue(othersId);
    if(isNaN(budget) || budget<0){
        return '';
    }
    else{
        return budget;
    }
}

const allSelectBtn=document.querySelectorAll('.select_btn');
for(const btn of allSelectBtn){
    btn.addEventListener('click',function(){
        const playerName=btn.parentNode.childNodes[1].innerText;
        
        const playersParent=document.getElementById('order_list');
        const players=playersParent.childNodes.length;
        if(players<5){
            btn.setAttribute("disabled", "");
            const orderLis=document.getElementById('order_list');
            const li=document.createElement('li');
            li.innerText=playerName;
            orderLis.appendChild(li);
        }
        else{
            alert('players not allow')
        }
        
    })
}

document.getElementById('budget_calculate').addEventListener('click',function(){
    const playersBudget=getPleyersBudget();
    const displayBudgetElement=document.getElementById('display_budget');
    displayBudgetElement.innerText=playersBudget;
})

document.getElementById('total_price').addEventListener('click',function(){
    const totalAmountElement=document.getElementById('total_amount');

    const playersBudget=getPleyersBudget();
    const managerBudget=othersBudget('manager_budget');
    const coachBudget=othersBudget('coach_budget'); 

    const totalAmount=playersBudget+managerBudget+coachBudget;
    totalAmountElement.innerText=totalAmount;
})