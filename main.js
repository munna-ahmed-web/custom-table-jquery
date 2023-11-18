let initalColumnSize = ["First Name", "Last Name", "Age"];

const initalCustomValue = [
  { id: 1, name: "First Name", checked: true, uniqid: "fname" },
  { id: 2, name: "Last Name", checked: true, uniqid: "lname" },
  { id: 3, name: "Email", checked: false, uniqid: "email" },
  { id: 4, name: "Age", checked: true, uniqid: "age" },
  { id: 5, name: "Date of Birth", checked: false, uniqid: "dob" },
  { id: 6, name: "Gender", checked: false, uniqid: "gender" },
  { id: 7, name: "Marital Status", checked: false, uniqid: "mstatus" },
  { id: 8, name: "Company", checked: false, uniqid: "company" },
  { id: 9, name: "Phone", checked: false, uniqid: "phone" },
  { id: 10, name: "Address", checked: false, uniqid: "address" },
];


const bgButtonData = [
  { name: "Ash", value: "ashColor" },
  { name: "Green", value: "greenColor" },
  { name: "Leafy", value: "leafyColor" },
  { name: "Yellow", value: "yellowColor" },
];



//************************************************************************************************************** */

const updateCheckedValue = (name, value) =>{
    initalCustomValue.forEach((singleCustomValue)=>{
        if(singleCustomValue.name == name){
            singleCustomValue.checked = value;
        }
    })
}


const handleCheckboxChange = (e) =>{
    if (e.target.checked){
        initalColumnSize.push(e.target.value);
        updateCheckedValue(e.target.value, true);
        renderCheckBox();
        renderTable()
    }else{
        initalColumnSize = initalColumnSize.filter(
          (value) => value != e.target.value
        );
        updateCheckedValue(e.target.value, false);
        renderCheckBox();
        renderTable();
    }
}

const handleButtonClick = (e) =>{
    const bgDiv = $("#bgSection");
    bgDiv.attr("class", e.target.value);
}


//*********************************************************************************** */

//Input Checkbox section
const renderCheckBox = () =>{
  const inputContainer = $("#data");
  initalCustomValue.forEach((singleValue, index) => {
    const checkbox = $("<input>", {
      type: "checkbox",
      value: singleValue.name,
      id: singleValue.uniqid,
      name: singleValue.uniqid,
      checked: singleValue.checked,
      onchange: "handleCheckboxChange(event)",
    });
    const label = $("<label>", {
      for: singleValue.uniqid,
      text: singleValue.name,
    });
    inputContainer.append(checkbox, label, "<br>");
  });
};

//Table Section *********
const renderTable =()=>{
    const headContainer = $("#headContainer");
    initalColumnSize.forEach((singleColumn)=>{
        const th = $("<th>", {
          text: singleColumn,
        });
        headContainer.append(th);
    })
}


//button section********
const renderBackgroundChangeButton = ()=>{
    const buttonContainer = $("#buttonSection");
    bgButtonData.forEach((singleButton)=>{
        const button = $("<button>", {
          type: "button",
          text: singleButton.name,
          val: singleButton.value, 
          click: handleButtonClick, 
        });

        buttonContainer.append(button);
    })
}

$(document).ready(()=>{
  renderBackgroundChangeButton();
  renderCheckBox();
  renderTable();
})
