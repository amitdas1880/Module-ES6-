import { customer1 , customer2 , customer3 as cust } from "./Id.js";     //we can import more then one function from a folder.

customer1();
customer2();
cust();                                                         // (customer3 as cust) it means change the name of customer3 function, at the time of import. 
                                                                

import { account1 ,account2, account3 } from "./Account.js";            //we can import more then one function from a folder.

account1( "AR1" ,  "24061" , ' Rs : 12,56,852 /-' );

account2( "BF2" , "02566" , ' Rs : 2,05,800 /-' );

account3( "RT" , "05092" , ' Rs : 1,05,800 /-' );


import {default as First , account2 as sceond, account3 as Third} from "./status.js";      // at the time of import default function, create or declare the name of the function.

First ();

sceond ("amount withdrawing");

Third ("withdrawing in processed");


import * as customer_address from "./address.js"                        // Shortcut key of import {systex : * as (create or declare the function name) }
                                                                        // with the help of this shortcut key you can import all the function of the folder.
customer_address.address1 ();
customer_address.address2 ();
customer_address.address3 ();
console.log (customer_address.BANK_NAME);