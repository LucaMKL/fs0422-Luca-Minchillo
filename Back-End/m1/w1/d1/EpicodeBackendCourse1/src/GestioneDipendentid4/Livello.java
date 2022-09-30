package GestioneDipendentid4;

public enum Livello {
	OPERAIO(1),
	IMPIEGATO(1.2),
	QUADRO(1.5),
	DIRIGENTE(2);
	
	private double coeff;
	
	private Livello(double c) {
		this.coeff = c;
	}
	
	public double getCoeff() {
		return this.coeff;
	}
}
