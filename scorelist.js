class Team {
    constructor(t,kp1,pp1,kp2,pp2,kp3,pp3,kp4,pp4,kp5,pp5,kp6,pp6,kp7,pp7) {
        this.tname = t;
        this.kp1 = kp1;
        this.pp1 = pp1;
        this.kp2 = kp2;
        this.pp2 = pp2;
        this.kp3 = kp3;
        this.pp3 = pp3;
        this.kp4 = kp4;
        this.pp4 = pp4;
        this.kp5 = kp5;
        this.pp5 = pp5;
        this.kp6 = kp6;
        this.pp6 = pp6;
        this.kp7 = kp7;
        this.pp7 = pp7;
        this.overall = kp1 + pp1 + kp2 + pp2 + kp3 + pp3 + kp4 + pp4 + kp5 + pp5 + kp6 + pp6+ + kp7 + pp7;
    }
}
var arr = [];
//arr[x] = new Team("Team name", kp1 , pp1 , kp2 , pp2 , kp3 , pp3 , kp4 , pp4 , kp5 , pp5, kp6, pp6, kp7, pp7);


arr[0] = new Team(" 7xTequilla          ", 4, 1, 2, 1, 0, 1, 2, 1, 24, 14, 0, 0, 0, 6);

arr[1] = new Team(" XXX                 ", 0, 0, 0, 8, 4, 3, 4, 8, 8, 1, 0, 1, 12, 5);

arr[2] = new Team("                     ",0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

arr[3] = new Team(" DOA Gaming          ", 8, 1, 8, 0, 10, 10, 2, 1, 8, 1, 0, 0, 0, 0);

arr[4] = new Team(" TEAM TARGET         ", 0, 1, 4, 6, 2, 5, 18, 5, 0, 8, 0, 3, 0, 0);

arr[5] = new Team(" LANNISTER Esports   ", 8, 3, 4, 1, 0, 1, 0, 0, 0, 5, 12, 1, 4, 1);

arr[6] = new Team("  TAKZ               ", 18, 8, 0, 1, 2, 0, 8, 1, 2, 1, 14, 5, 2, 1);

arr[7] = new Team(" MALLU COMRADE       ", 4, 4, 6, 1, 0, 0, 0, 10, 20, 10, 2, 1, 2, 4);

arr[8] = new Team(" FERRICZ             ", 0, 0, 0, 4, 14, 2, 0, 4, 0, 1, 0, 1, 0, 0);

arr[9] = new Team("  TPG                ", 2, 0, 2, 0, 8, 0, 10, 3, 10, 6, 0, 1, 8, 3);

arr[10] = new Team(" TEXAS 14Esports    ", 8, 1, 26, 20, 0, 0, 46, 20, 14, 7, 10, 2, 10, 10);

arr[11] = new Team(" INFACT Esports     ", 8, 7, 4, 7, 12, 0, 2, 0, 2, 3, 4, 4, 0, 0);

arr[12] = new Team(" Knights Of Mutant   ", 18, 6, 30, 14, 26, 8, 8, 1, 0, 1, 16, 20, 20, 20);

arr[13] = new Team(" Team Galaxy        ", 0, 2, 0, 2, 6, 7, 0, 1, 0, 0, 0, 0, 0, 0);

arr[14] = new Team(" TORPEDO Elites     ", 26, 20, 4, 3, 4, 5, 8, 6, 22, 20, 4, 14, 4, 14);

arr[15] = new Team(" ReaperXesports     ", 0, 0, 26, 5, 30, 20, 10, 7, 2, 1, 0, 8, 0, 8);

arr[16] = new Team(" XtremeAlpha        ", 0, 0, 4, 1, 0, 1, 4, 1, 0, 0, 0, 0, 0, 0);

arr[17] = new Team(" Brigadianz Esports ", 8, 5, 8, 10, 4, 2, 10, 14, 2, 2, 12, 7,12, 7);

arr[18] = new Team(" Gain Official      ", 12, 14, 8, 1, 8, 14, 0, 0, 6, 4, 0, 6, 10, 2);

arr[19] = new Team(" 7DE                ", 0, 1, 0, 0, 14, 6, 4, 2, 2, 0, 18, 10, 0, 0);

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length-1 ; j++) {
        if (arr[j].overall < arr[j + 1].overall) {
            t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;
        }
        else if (arr[j].overall == arr[j + 1].overall) {
            var kpj = arr[j].kp1 + arr[j].kp2 + arr[j].kp3 + arr[j].kp4 + arr[j].kp5 + arr[j].kp6 + arr[j].kp7;
            var kpj2 = arr[j+1].kp1 + arr[j + 1].kp2 + arr[j + 1].kp3 + arr[j + 1].kp4 + arr[j + 1].kp5 + arr[j + 1].kp6 + arr[j + 1].kp7;
            if (kpj < kpj2) {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
            }
        }
    }
}
