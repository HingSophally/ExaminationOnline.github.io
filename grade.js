var txt = document.getElementById('txt');
        var rs = document.getElementById('rs');
        var btnshow =document.getElementById('btnshow');
        btnshow.addEventListener("click",onChlick);

        txt.addEventListener("keyup", onCheck)
        function onCheck(){
            var t =txt.value;
            if(t == ""){
                btnshow.disabled = true;
            }
            else{
                btnshow.disabled = false;
            }
        }


        function onChlick(){
           var score = txt.value;
           var gpa = score * 4/100;
           if(score >= 85){
                rs.innerText = "Result : A" +":and GPA=" + gpa;
           }
           if(score >= 76){
                rs.innerText = "Result : B" +":and GPA=" + gpa;
           }
           if(score >= 68){
                rs.innerText = "Result : C" +":and GPA=" + gpa;
           }
           if(score >= 55){
                rs.innerText = "Result : D" +":and GPA=" + gpa;
           }
           if(score >= 50){
                rs.innerText = "Result : E" +":and GPA=" + gpa;
           }
           if(score < 50){
                rs.innerText = "Result : F " +":and GPA=" + gpa;
           }
        }
        btnshow.addEventListener("mouseover", onChlick)
        function onChlick(){
            rs.style.border = "10px solid pink"
        }
        btnshow.addEventListener("mouseleave", onChlick0)
        function onChlick0(){
            rs.style.border = "0px solid red"
        }
        //var score =txt.value;
        //function xx
        
