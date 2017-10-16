
var i = 0;
  var newElement = [];
  var mainContainer = document.createElement('div');
  var colr = ['#4286F4','#003171','#5500FF','#6C8DC1','#1F4788','#3A4F70','#22A7F0','#317589','#59ABE3','#C6DCFF','#4B77BE',
              '#2066D6','#162844','#325A99','#BE90D4','#9B59B6','#8E44AD','#89729E','#763568','#875F9A','#8D608C',
              '#8E44AD','#BF55EC','#B3D151','#D4ED84','#CDF99F','#ACD185','#C8F9C5','#69C663','#A3E2AF','#EAF2EC',
              '#D6DBD8','#E6F7EC','#CEFFDF','#F22613','#CF3A24','#C3272B','#8F1D21','#FF5733','#FD2D00','#9E2004',
              '#EFB0A2','#FF7676','#6F4343','#5B0303','#FF01D0','#FF01D0','#F99BE8','#F8CCF0','FE08AC','#862F69',
              '#FF185C','#D500F9','#DCFBF4','#00785D','004C3B','#CB4141','#F56A04','#A24A09','#E8A574','#FFB800',
              '#D19700','#100030','#E4DEF0','#D2D2D3','#C2C2C2','#7E7E7E','#585858','#E2CE46','#594E03','#FCF3B3','#BAB06A','#91800A','#443E0E','#EDD623',
              '#BFBF24','#AFAF33','#2D2D1B','#FDD1D1','#BE9696','#E3EB9F','#F9F99A','#D9FFA9','#DCDAFF'];
  mainContainer.className = 'main';
  document.body.appendChild(mainContainer);

  for (i; i < colr.length; i++) {
    newElement[i] = document.createElement('div');
   var str = colr[i];
     newElement[i].style.backgroundColor = str;
    newElement[i].className = 'box';
    newElement[i].id = (i + 1);
    /*var bt = document.createElement('BUTTON');
    bt.className = "copy_button";*/
    var t = document.createTextNode(str);

    /*bt.appendChild(t);*/
    newElement[i].appendChild(t);
    mainContainer.appendChild(newElement[i]);
    /*'#E2CE46','#594E03','#FCF3B3','#BAB06A','#91800A','#443E0E','#EDD623',
              '#BFBF24','#AFAF33','#3D3D0E','#2D2D1B'*/
  }
  var foot = document.createElement("footer");
  var foottext =  'Made with love';
  foot.innerHTML = foottext;
  mainContainer.appendChild(foot);
