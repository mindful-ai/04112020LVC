define(['accUtils', 'knockout', 'jquery'],
 function(accUtils, ko, $) {
    function EmployeesViewModel() {
        var self = this;
        self.name = ko.observable("Raj");
        
    }
    return EmployeesViewModel;
  }
);