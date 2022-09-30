package it.epicode.be;

public class Ex2 {

	public static void main(String[] args) {
		
		String st="000";
		SIM s = new SIM("123", 20, 5);
		s.ins("000", 3);
		s.ins("789", 5);
		System.out.println(s);
		System.out.println("totale chiamate in min:" + s.cal());
		s.ins("000", 7);
		s.ins("456", 4);
		System.out.println(s);
		System.out.println("chiamate verso:"+st+":"+s.conta(st));
		s.ins("000",7);
		s.ins("789",4);
		System.out.println(s);
		System.out.println("chiamate verso:"+st+":"+s.conta(st));
	}
}

class SIM {
	private String numero;
	private int eff;
	private float credito;
	private TEL T[];
	
	SIM(String _n, int _c, int _dim){
		numero = _n;
		credito = _c;
		eff=0;
		T = new TEL[_dim];
	}
	public void ins(String num, int tempo) {
		if(eff < T.length) {
			TEL t = new TEL(num,tempo);
			T[eff]=t;
			credito-=(float) tempo/4;
			eff++;
		}else System.out.println("max chiamate effettuate");
	}
	public int cal(){
		   int tot=0;
		   for(int i=0;i < eff;i++)tot+=T[i].getd();
		   return tot;
		}
	public int conta(String n){
		int tot=0;
		for(int i=0;i < eff;i++)
		   if(T[i].getn().equals( n ))tot++; return tot;
		}
	public String getn() { return numero;}
	public float getc() {return credito;}
	public String toString() {
	   String st="numero:"+getn()+" credito:"+getc()+"\n";
	   for(int i=0;i < eff;i++)st+=T[i].getn()+" "+T[i].getd()+"\n";
	   return st;
	}
	class TEL {
		private String numero;
		private int durata;
		TEL(String n,int d){numero=n;durata=d;}
		public String getn() {return numero;}
		public int getd() {return durata;}
		}//fine classe TEL
}