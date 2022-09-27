package it.epicode.be;

import java.util.Scanner;

public class Helloworld {

public static void main (String[] args)
		{
		// Stampa a console  la frase
		System.out.println("This is my first Epicode Java Project!");
		System.out.println("Esercizio 1");
		System.out.println(prodotto(12, 13));
		System.out.println(concatena("il prezzo della macchina è di ", 14000));
		System.out.println(c);
		System.out.println(vocali.length);
		System.out.println(perimetroRettangolo("Il preimetro del rettangolo è ",25, 10, 25, 10));
		System.out.println("Il numero " + numero + " è pari? " + pariDispari(numero));
		int z = moltiplica(4, 5);
		System.out.println("molt: ");
		System.out.println(z);
		String conc = concatena("String", 5);
		System.out.println("concat: ");
		System.out.println(conc);
		String[] newArr = inserisci(new String[] {"a","b","c","d","e"}, "f");
		System.out.println("newArr: ");
		System.out.println("inserisci");
		}

	static int numero = 10;



	public static int prodotto(int x, int y) {
		return x * y;
	};
	
	public static String concatena( String s1, int s2) {
		return s1 + s2;
	};
	
	String arr[] = new String [5];
	
	static char[] vocali = {'a', 'e', 'i', 'o', 'u'};
	 static char c = vocali[4];
	 
	 Scanner in = new Scanner(System.in);
	 
	 public static String perimetroRettangolo(String f1, int l1, int l2, int l3, int l4) {
		return f1 + l1 + l2 + l3 + l4;
	}
	 
	public static boolean pariDispari(int numero) {
		if ((numero % 2) == 0) {
			return true;
		}else {
			return false;
		}

	
	}
		
	public static int moltiplica(int a, int b) {
		return a+ b;
	}
	
	public static  String concat(String s, int n) {
		return s + n;
	}
	
	public static String[] inserisci(String[] arr , String s) {
		String[] res = {arr[0], arr[1], s, arr[2], arr[3], arr[4]};
		return res;
		}
	}
	
	//gli elementi private sono accessibili solo all'interno della loro classe
	
	 




