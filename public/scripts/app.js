/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: IIFE - app.js
*/

// IIFE --> Immediately Invoked Function Expression
(function(){
    
    function Start()
    {
        console.log("App started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');
        
        for(button of deleteButtons)
        {
            button.addEventListener('click', (event) => 
            {
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/question-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);

})();