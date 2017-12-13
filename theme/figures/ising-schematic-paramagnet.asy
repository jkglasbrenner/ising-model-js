// command line compilation: asy -f pdf fe-lattice-layer.asy
// command line compilation: asy -f pdf -noprc -render=0 fe-lattice-layers.asy

size(300);
import solids;
import geometry;

// Define pens
pen backPen=gray(0.5)+dashed+0.5bp;
pen frontPen=gray(0.2)+dashed+0.5bp;
pen blackPen=gray(0.0)+solid+2bp;
pen connectPen=gray(0.5)+solid+0.5bp;

// Define sphere colors
material solidgreen = material(diffusepen=heavygreen, emissivepen=heavygreen, specularpen=heavygreen);
material solidorange = material(diffusepen=orange, emissivepen=orange, specularpen=orange);
material solidblue = material(diffusepen=royalblue, emissivepen=royalblue, specularpen=royalblue);
material RH = material(diffusepen=purple, emissivepen=purple, specularpen=purple);

material[] sphereColorsALLFE = {
    solidorange, solidorange, solidorange, solidorange,
    solidorange, solidorange, solidorange, solidorange,
    solidorange, solidorange, solidorange, solidorange, solidorange};

pen bluePen1=royalblue+solid+0.8pt;
pen bluePen2=royalblue+solid+2.0pt;
pen orangePen1=orange+solid+0.8pt;
pen orangePen2=orange+solid+2.0pt;

pen[] penColorsALLFE1 = {
    bluePen1, bluePen1, bluePen1, bluePen1,
    bluePen1, bluePen1, bluePen1, bluePen1,
    bluePen1, bluePen1, bluePen1, bluePen1,
    bluePen1, bluePen1, bluePen1, bluePen1};

pen[] penColorsALLFE2 = {
    bluePen2, bluePen2, bluePen2, bluePen2,
    bluePen2, bluePen2, bluePen2, bluePen2,
    bluePen2, bluePen2, bluePen2, bluePen2,
    bluePen2, bluePen2, bluePen2, bluePen2};

currentprojection=orthographic (
camera=(0,0,5),
up=(0,0,1),
target=(0,0,0),
zoom=1.0
);

currentlight=nolight;

// save predefined 2D orientation vectors
pair NN=N;
pair SS=S;
pair EE=E;
pair WW=W;

// lattice vectors
real a = 2.8655;
triple LATA = (a,0,0);
triple LATB = (0,a,0);
triple LATC = (0,0,a);
triple ORG = (0,0,0);

//%points on tetragonal shape
triple A = (0,0,0);
triple E = (a,0,0);
triple D = (0,a,0);
triple B = (0,0,a);
triple C = (0,a,a);
triple F = (a,0,a);
triple H = (a,a,0);
triple G = (a,a,a);

triple[] cubicCornerA={  
  A,C,F,H,
};

triple[] cubicCornerB={  
  B,D,E,G,
};

//%Fe atoms
triple FE01 = ORG + 0*LATA + 0*LATB;
triple FE02 = ORG + 1*LATA + 0*LATB;
triple FE03 = ORG + 2*LATA + 0*LATB;
triple FE04 = ORG + 3*LATA + 0*LATB;
triple FE05 = ORG + 0*LATA + 1*LATB;
triple FE06 = ORG + 1*LATA + 1*LATB;
triple FE07 = ORG + 2*LATA + 1*LATB;
triple FE08 = ORG + 3*LATA + 1*LATB;
triple FE09 = ORG + 0*LATA + 2*LATB;
triple FE10 = ORG + 1*LATA + 2*LATB;
triple FE11 = ORG + 2*LATA + 2*LATB;
triple FE12 = ORG + 3*LATA + 2*LATB;
triple FE13 = ORG + 0*LATA + 3*LATB;
triple FE14 = ORG + 1*LATA + 3*LATB;
triple FE15 = ORG + 2*LATA + 3*LATB;
triple FE16 = ORG + 3*LATA + 3*LATB;

triple[] tetraFE={
  FE01, FE02, FE03, FE04, FE05, FE06, FE07, FE08, FE09, FE10, FE11, FE12, FE13, FE14, FE15, FE16,
};

triple[] spinALLFE={
  FE01, FE02, FE03, FE04, FE05, FE06, FE07, FE08, FE09, FE10, FE11, FE12, FE13, FE14, FE15, FE16,
};

real[] spinDirectionALLFE={
  1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0
};

real[] spinDirectionParaMagnet={
  -1,  1, -1, -1,
  -1,  1,  1, -1,
  1,  1, -1,  1,
  -1,  1, -1,  1
};

pen[] spinColorsParaMagnet1={
    orangePen1, bluePen1, orangePen1, orangePen1,
    orangePen1, bluePen1, bluePen1, orangePen1,
    bluePen1, bluePen1, orangePen1, bluePen1,
    orangePen1, bluePen1, orangePen1, bluePen1
};

pen[] spinColorsParaMagnet2={
    orangePen2, bluePen2, orangePen2, orangePen2,
    orangePen2, bluePen2, bluePen2, orangePen2,
    bluePen2, bluePen2, orangePen2, bluePen2,
    orangePen2, bluePen2, orangePen2, bluePen2
};

// Draw 1nn connections
draw(FE01--FE02--FE03--FE04,connectPen);
draw(FE05--FE06--FE07--FE08,connectPen);
draw(FE09--FE10--FE11--FE12,connectPen);
draw(FE13--FE14--FE15--FE16,connectPen);

draw(FE01--FE05--FE09--FE13,connectPen);
draw(FE02--FE06--FE10--FE14,connectPen);
draw(FE03--FE07--FE11--FE15,connectPen);
draw(FE04--FE08--FE12--FE16,connectPen);

//%center of faces

triple I = (A+B+C+D)/4; //%center of face ABCD
triple J = (E+F+G+H)/4; //%center of face EFGH
triple K = (D+C+G+H)/4; //%center of face DCGH
triple L = (A+B+F+E)/4; //%center of face ABFE
triple M = (C+B+G+F)/4; //%center of face CBGF
triple N = (D+A+E+H)/4; //%center of face DAEH

triple[] faceCenter={  
  I,J,K,L,M,N,
};


//%connectors
triple O = (1,1,3);
triple P = (1,3,1);
triple Q = (3,1,1);
triple R = (3,3,3);

triple[] connectors={  
  O,P,Q,R,
};

//%place non-atom cube corners

real cornerAR=0.5;
real cornerBR=0.25;
real faceCR=0.25;
real connR=faceCR;

real ferad=0.36;
real asrad=0.36;
real carad=0.6;

// Draw 2nn connections
// draw(A--2*E--2*H--2*D--cycle,backPen);

real cylR=0.062;

void Draw(guide3 g,pen p=currentpen){
  draw(
    cylinder(
      point(g,0),cylR,arclength(g),point(g,1)-point(g,0)
    ).surface(
               new pen(int i, real j){
                 return p;
               }
             )
  );
}

void drawSpheres(triple[] C, real R, material[] m, string[] l, pen lc){
  for(int i=0;i<C.length;++i){
    draw(surface(sphere(C[i],R)), surfacepen=m[i]
                        );
    label(scale(0.9)*l[i], C[i], 0*X, p=lc);
  }
}

void applySpins(triple[] C, real[] R, pen[] lc1, pen[] lc2){
  for(int i=0;i<C.length;++i){
    draw(C[i]-R[i]*0.2*Y--C[i]+R[i]*0.9*Y,lc1[i],Arrow3(HookHead2));
    draw(C[i]-R[i]*0.5*Y--C[i]+R[i]*0.7*Y,lc2[i]);
    // draw(C[i]-R[i]*0.2*Y--C[i]+R[i]*0.9*Y,black+0.8pt,Arrow3(HookHead2));
    // draw(C[i]-R[i]*0.5*Y--C[i]+R[i]*0.7*Y,black+2.0pt);
  }
}

// applySpins(spin2Rh2nn, spinDirection2Rh2nn);
// drawSpheres(tetraFE,ferad,sphereColors2Rh2nn,sitesFE, white);
// applySpins(spinALLFE, spinDirectionParaMagnet, penColorsALLFE1, penColorsALLFE2);
applySpins(spinALLFE, spinDirectionParaMagnet, spinColorsParaMagnet1, spinColorsParaMagnet2);
// drawSpheres(tetraFE,ferad,sphereColorsALLFE,sitesFE, white);

