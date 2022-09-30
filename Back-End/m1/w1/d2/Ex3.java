package it.epicode.be;

public class Ex3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Articolo A1 = new Articolo(178, "santino", 50,10);
		Cliente C1 = new Cliente(560, "Aldo", "Baglio", "sbutrino@gmail.com",13/9 );
		Carrello Ca1 = new Carrello("è associato", 10, 50 );
		
		System.out.println(A1);
		System.out.println(C1);
		System.out.println(Ca1);
	}
}
	class Articolo {
		public Articolo(int codArt, String descArt, double prezzo, int pezziDisp) {
		
		}
		int codArt;
		String descArt;
		double prezzo;
		int pezziDisp;
	}
	class Cliente {
		public Cliente(int codCl, String nome, String cognome, String email, int dataIscr) {
			
		}
		int codCl;
		String nome;
		String cognome;
		String email;
		int dataIscr;
	}
	class Carrello {
		public Carrello(String clienteAss, int elencoArt, double costoTot) {
			
		}
		String clienteAss;
		int elencoArt;
		double costoTot;
	}

