var inquirer = require("inquirer");


inquirer.prompt([
  {
    type:'list',
    name: 'user',
    message:'Are you a Customer or Manager?',
    choices:['Customer', 'Manager']
  }
]).then(function(answer){
  switch (answer.user) {
    case 'Customer':
    require('./bamazonCustomer.js');
    break;
    default: var customer = require('./bamazonCustomer.js');

    case 'Manager':
    validate()
    break;

  }
});

function validate() {
  inquirer.prompt([
    {
      type:'password',
      name: 'password',
      message:'Please enter your password'
    }
  ]).then(function(answer) {
    if(answer.password == 'manager'){
      var date = new Date();
      console.log('\n Welcome to the manager dashboard\n ',date.toDateString()+"\n ", date.toLocaleTimeString()+"\n -------------------------------------- \n");
      require('./bamazonManager.js');
    }
    else {
      console.log('\n Sorry your password does not match!');
    }
  })
}
