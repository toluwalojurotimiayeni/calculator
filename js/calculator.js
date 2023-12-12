const $buttons = document.querySelectorAll("button");

        $buttons.forEach(function(node){
            node.addEventListener("mousedown", function(event){
                event.preventDefault();
                const value = node.innerText.trim();
                const $input = document.querySelector(".input")
                const inputText = $input.innerText.trim()

                if(inputText == "0" || inputText == "undefined" || inputText == "Infinity"){
                    $input.innerText = ""
                }

                if(value == "="){
                    let solution = eval(inputText)
                    $input.innerText = solution
                    return true
                }

                if(value=="C"){
                    $input.innerText = ""
                    return true;
                }


                $input.append(value)

            })
        })