const forList = [];

function inputFortuneNum(){
  console.log(forList.length);
  
  while (forList.length !== 7){

    const now = Date.now();
    const forNum = now%44+1;

    for (const n in forList){
      if (forNum !== forList[n]){
        forList.push(forNum);
      }
    }
    console.log(`List: ${forList}`);
  }
}

function init(){
  inputFortuneNum();
  console.log(forList);
}

init();