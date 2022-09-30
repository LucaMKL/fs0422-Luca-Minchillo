package GestioneDipendentid4;

public class Dipendente {
	//private static double stipendioBase = 1000;
	
	Livello Livello;
	double stipendio;
	double coeff;
	double stipendioBase;
	
	public Dipendente() {
		this.Livello = Livello.DIRIGENTE;
		this.setLivello(Livello.DIRIGENTE);
		this.stipendioBase()
	}
	
	public void calcolaStipendio() {
		double c = Livello.OPERAIO.getCoeff();
		this.stipendio = stipendioBase * this.Livello.getCoeff();
	}
}