const text = prompt("Please insert your text");
        const first = firstWord(text);
        function firstWord(first) {
            let strSplit = first.split(' ');
            return strSplit[0];
        }
        alert("The first word is: " + first);