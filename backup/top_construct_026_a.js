/*--- Platform page 026 Motion Java Script ---*/

  /* --------------------------------------------------------- */
 /*--- Scriptul pentru butoanele: inaine, inapoi si acasa ----*/
/* --------------------------------------------------------- */


function OnWeLoad()
{

	Img8={max:1,pos:0,grp:'9'};
	Img8[0]=new Image();Img8[0].src='images/square.gif';
	Img8[1]=new Image();Img8[1].src='images/top_construct_back-button.gif';
	Img10={max:1,pos:0,grp:'11'};
	Img10[0]=new Image();Img10[0].src='images/square.gif';
	Img10[1]=new Image();Img10[1].src='images/top_construct_next-button.gif';	IDP.my=(window.parent.frames.length && parent.MyFrm)?parent.MyFrm:window;
	IDP[1]=(V5)?'document.getElementById(\'e8\').src':(IE)?'e8.src':'document.e8.src';
	IDP[2]=(V5)?'document.getElementById(\'e10\').src':(IE)?'e10.src':'document.e10.src';
	isOvr=1;
}


/*--- EndOfFile ---*/
    /* --------------------------------------- */
   /*--- |< /()()()()oooo^oooo()()()()\ >| ---*/
  /*--- |< |------ by © Ady © ------ | >| ---*/
 /*--- |< \()()()()oooo^oooo()()()()/ >| ---*/
/* --------------------------------------- */
