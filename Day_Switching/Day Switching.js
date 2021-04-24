const numOfDay = parseInt(prompt("number of days", "Please enter number btw 0-6"));
        const day = getDay(numOfDay);
        function getDay(num){
            let day;    
            switch(num)
            {
                case 0:
                    day="Sunday";
                    break;
                case 1:
                    day="Monday";
                    break;
                case 2:
                    day="Tuesday";
                    break;
                case 3:
                    day="Wednesday";
                    break;
                case 4:
                    day="Thursday";
                    break;
                case 5:
                    day="Friday";
                    break;
                case 6:
                    day="Saturday";
                    break;
                default:
                    day="Please enter number of day btw 0 to 6";
            }
            return day;
        }
        alert("Today is "+day);