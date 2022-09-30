package it.epicode.be;

public class Giorno2 {

	public static void main(String[] args) {
		
		// creazione iastanza
		Student s1 = new Student();
		s1.name = "mario";
		s1.lastname = "rossi";
		s1.age = 25;
		s1.id = 1;
		s1.votes = new byte[] {8, 10 ,6 ,1};
		
		s1.sayHello2();
		//System.out.println(s1.name + " " + s1.lastname);
		
		System.out.println(java.util.Arrays.toString( s1.votes ));
		
		Student s2 = new Student();
		s1.name = "aldo";
		s1.lastname = "baglio";
		s1.age = 25;
		s1.id = 1;
		s1.votes = new byte[] {8, 10 ,6 ,1};
	}

}
//classe
class Student {
	//attributi
	String name;
	String lastname;
	int age;
	int id;
	byte[] votes;
	
	//costruttori
	Student(){}
	
	Student(String name, String lastName, int age, byte[] votes){
		
		if(name.length() >=2 ) {
			this.name = name;
		}else {
			System.out.println("warning: il nome è troppo corto");
		}
		
		if(lastName.length() >=2 ) {
			this.lastname = lastName;
		}else {
			System.out.println("warning: il cognome è troppo corto");
		}
		
		this.age = age;
		this.votes = votes;
	}
	
		//metodi interni
		boolean checkStringLenght(String s, int l) {
			return (s.length() >=1 ) ? true : false;
		}
		
		void printError(String field, String realField, String message) {
			System.out.println("warning" + field + "è" + message + "! ("+realField+")");
		}
		//( "Warning" + field + "e" +  message + "! ("realField")");
		
	
	//metodi
	void sayHello() {
		System.out.println("ciao, sono uno studente! Mi chiamo " + this.name + " " + this.lastname);
		
		//scope
		
		int x = 10;
		if( x == 10 ) {						//inizio blocco
			int y = 20;
			System.out.println( x + y );
		}									//fine blocco
		
		System.out.println( x );
		//System.out.println( y );
		
		{
			int y = 20;
			System.out.println( x );
			
			{
				int z = 43; 
				{
					if(z == 43) {
						
					}
				}
			}
		}
		//System.out.println(y);
	}
	
	void sayHello2() {
		System.out.printf(
				"ciao sono uno studente! Mi chiamo %s %s (e ho %d anni) e i miei voti sono; %s %n",
				 this.name, this.lastname, this.age
			);
		
		for(int i = 0; i < this.votes.length; i++ ) {
			System.out.println( "voto" + (i+1) + ":" + this.votes[i]);
		}
	}
	
	//@Overraide //questo metodo è una sovrascrittura 
}
