sap.ui.define(
  [
    "./BaseController",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    "../model/formatter",
    "sap/m/MessageBox",
    "sap/m/Label",
    "sap/m/Text",
    "sap/m/PDFViewer",
  ],
  function (
    BaseController,
    Sorter,
    Filter,
    FilterOperator,
    JSONModel,
    Fragment,
    Formatter,
    MessageBox,
    Label,
    Text,
    PDFViewer
  ) {
    "use strict";

    return BaseController.extend(
      "test.env.lenon.appproductsnorthwind.controller.Main",
      {
        formatter: Formatter,

        onInit: function () {
            
        },

        onGetDates: function () {
          let baseDate = new Date(2024, 0, 30); // January 31, 2024
          const nextDueDates = this.onResolveDates(baseDate, 50);
          console.log(nextDueDates);
        },
        onGetDate: function () {
          let baseDate    = "31/10/2024"; // January 31, 2024
          let currentDate = "30/11/2024"
          const nextDueDate = this.getNextDate(baseDate, currentDate);
          console.log(nextDueDate);
        },

        onDateStatement: function (oDate) {
          let [day, month, year] = oDate.split("/");
          let formatedDate = year + ',' + month + ',' + day;
          return formatedDate;
        },

        getNextDate: function (dateBase, newDate) { // "31/07/2024" && "31/08/2024"
          dateBase        = this.onDateStatement(dateBase);
          newDate         = this.onDateStatement(newDate);
          dateBase        = new Date(dateBase);
          newDate         = new Date(newDate);
          let baseDay     = dateBase.getDate();
          let nextMonth   = newDate.getMonth();
          let nextYear    = newDate.getFullYear();
          let currentDate ;

          if (nextMonth === 11) {
            nextMonth = 0;
            nextYear = nextYear + 1;
          } else {
            nextMonth = nextMonth + 1;
          }

          if (baseDay > 28) {

            if(baseDay === 29){

            }

            if(baseDay === 30){
              
            }

            if(baseDay === 31){
              
            

            if (nextMonth === 0) {
              currentDate = new Date(nextYear, nextMonth, 31);
            }
            if (nextMonth === 1) {
              currentDate = new Date(nextYear, nextMonth, 28);             
            }
            if (nextMonth === 2) {
              currentDate = new Date(nextYear, nextMonth, 31);
            }
            if (nextMonth === 3) {
              currentDate = new Date(nextYear, nextMonth, 30);
            }
            if (nextMonth === 4) {
              currentDate = new Date(nextYear, nextMonth, 31);
            }
            if (nextMonth === 5) {
              currentDate = new Date(nextYear, nextMonth, 30);
            }
            if (nextMonth === 6) {
              currentDate = new Date(nextYear, nextMonth, 31);
            }
            if (nextMonth === 7) {
              currentDate = new Date(nextYear, nextMonth, 31);
            }
            if (nextMonth === 8) {
              currentDate = new Date(nextYear, nextMonth, 30);
            }
            if (nextMonth === 9) {
              currentDate = new Date(nextYear, nextMonth, 31);
            }
            if (nextMonth === 10) {
              currentDate = new Date(nextYear, nextMonth, 30);
            }
            if (nextMonth === 11) {
              currentDate = new Date(nextYear, nextMonth, 31);
            }
          }

          }else{
            currentDate = new Date(nextYear, nextMonth, baseDay);
          }

          let formattedDate = `${currentDate.getDate()}/${(currentDate.getMonth() + 1)}/${currentDate.getFullYear()}`;

          return formattedDate;
        
        },

        onResolveDates: function (baseDate, count) {
          let dueDates    = [];
          let oDate       = {};
          let currentDate = baseDate;
          let baseDay     = baseDate.getDate();
          let nextDay     = baseDate.getDate();
          let nextMonth   = baseDate.getMonth();
          let nextYear    = baseDate.getFullYear();

          for (let i = 0; i < count; i++) {
            if (i === 0) {
              oDate = {
                Parcela: i + 1,
                DataVencimento: new Date(nextYear, nextMonth, nextDay),
              };
              dueDates.push(oDate);

              oDate = {};
            } else {
              if (nextMonth === 11) {
                nextMonth = 0;
                nextYear = nextYear + 1;
              } else {
                nextMonth = nextMonth + 1;
              }

              if (baseDay > 28) {
                if (nextMonth === 0) {
                  currentDate = new Date(nextYear, nextMonth, 31);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 1) {
                  currentDate = new Date(nextYear, nextMonth, 28);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 2) {
                  currentDate = new Date(nextYear, nextMonth, 31);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 3) {
                  currentDate = new Date(nextYear, nextMonth, 30);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 4) {
                  currentDate = new Date(nextYear, nextMonth, 31);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 5) {
                  currentDate = new Date(nextYear, nextMonth, 30);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 6) {
                  currentDate = new Date(nextYear, nextMonth, 31);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 7) {
                  currentDate = new Date(nextYear, nextMonth, 31);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 8) {
                  currentDate = new Date(nextYear, nextMonth, 30);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 9) {
                  currentDate = new Date(nextYear, nextMonth, 31);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 10) {
                  currentDate = new Date(nextYear, nextMonth, 30);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
                if (nextMonth === 11) {
                  currentDate = new Date(nextYear, nextMonth, 31);
                  oDate = {
                    Parcela: i + 1,
                    DataVencimento: new Date(currentDate),
                  };
                }
              } else {
                currentDate = new Date(nextYear, nextMonth, nextDay);
                oDate = {
                  Parcela: i + 1,
                  DataVencimento: new Date(currentDate),
                };
              }

              dueDates.push(oDate);
            }
          }
          return dueDates;
        },
      }
    );
  }
);
