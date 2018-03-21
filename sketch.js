const PI=3.1415926535;         //PI=  22/7
const PI2= PI*2;               
const tickRates=[PI2/87.97, PI2/224.7, PI2/365.25, PI2/686.98, PI2/4332.82, PI2/10755.7, pI2/30687.15, PI2/60190.03];//the number that is shown on tickrate is the dyas that it takes to orbit the sun
const distanceFromSun=[0.39, 0.723, 1, 1.524, 5.203, 9.539, 19.18, 30.06];  //the actual distance from the sun to the earth is 150million km so in this case we are gonna use 1 rather than 150million
const planetSizes=[4.878, 12.104, 12.756, 6.787, 142.796, 120.660, 51.118, 48.600];//the size of the earth is 12756km in diameterin this case we are timing it to 0.001

var
