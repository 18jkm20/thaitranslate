

function doSomething() {


    let txt = document.getElementById("myText").value.toString();
    let vocabData = txt.split(/\n/);
    for(i = 0; i < vocabData.length; i++){
        let vocabs = vocabData[i].split(/\t/);
        let vocab = vocabs[0];
        let numbers = vocabs[2];
        let numberIndex = vocabDatas.indexOf(vocab);


        if(vocabDatas.includes(vocab)){
            let result = "";
            result = numbers + " " + vocab + " : " + meanDatas[numberIndex];

            //show data
            let para = document.createElement("P");
            para.innerHTML = result;
            document.body.appendChild(para);
        }else{

            //show data
            let para = document.createElement("P");
            para.innerHTML = vocabDatas.includes(vocab);
            document.body.appendChild(para);
        }




    }


}