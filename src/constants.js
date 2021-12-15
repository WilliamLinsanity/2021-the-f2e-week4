export const  setCompanyArea = (list)=>{     
    const countList = [0,0,0,0,0]
     list.forEach((item)=>{
         switch(item.company.area){
            case '台灣 - 北北基':
              countList[0] += 1
              break
            case '台灣 - 桃竹苗':
              countList[1] += 1
              break
             case '台灣 - 中彰投':
              countList[2] += 1
              break
              case '台灣 - 雲嘉南':
              countList[3] += 1
              break
              default:
              countList[4] += 1
              break
         }
       })
       return countList
 }

 export const  setUserAge = (list)=>{     
    const countList = [0,0,0,0,0]
     list.forEach((item)=>{
         switch(item.age){
            case '21~25 歲':
              countList[0] += 1
              break
            case '26~30 歲':
              countList[1] += 1
              break
             case '31~35 歲':
              countList[2] += 1
              break
              case '36~40 歲':
              countList[3] += 1
              break
              default:
              countList[4] += 1
              break
         }
       })
       return countList
 }