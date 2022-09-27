package it.epicode.be;

public class Studenti {

	public static void main(String[] args) {
		
	Studente s1 = new Studente("Mario", "rossi", new byte[] {5,6,8,5,10});
	Studente s2 = new Studente("Mario", "rossi", new byte[] {5,6,8,5,10});
	Studente s3 = new Studente("Mario", "rossi", new byte[] {10,6,5,9,6});
		
	System.out.println(s1.equals(s2));
	System.out.println(s1.equals(s3));
	System.out.println(migliorStudente(new Studente[] {s1,s2,s3}));
	}
	
	public static String migliorStudente(Studente[] studenti) {
		
		String nomeMi = "";
		double mediaMi = 0;
		
		
		for(Studente s : studenti) {
			if(s.media > mediaMi)
				mediaMi = s.media;
				nomeMi = s.nome + " " + s.cognome;
		}
		return "il miglior studente è " + nomeMi + " " + "con la media del " + mediaMi;
	}
	
}
class Studente{
	int matricola;
	String nome;
	String cognome;
	byte [] voti;
	double media;
	static int id = 0;
	
	Studente(String _nome, String _cognome, byte[] _voti){
		nome = _nome;
		cognome = _cognome;
		voti = _voti;
		matricola = this.id++;
		this.stampaMedia();
	}
	
	
	@Override
	public boolean equals(Object obj) {
		Studente other = (Studente) obj;
		return this.nome.equals(other.nome) &&
				this.cognome.equals(other.cognome) &&
				this.media == other.media;
	}
	
	
	private double stampaMedia(){
		int sum = 0;
		
		for(int value: this.voti ) {
			sum += value;
		}
		
		double media = sum/voti.length;
		System.out.println( media );
		
		this.media = media;
		
		return media;
		
	}

}
