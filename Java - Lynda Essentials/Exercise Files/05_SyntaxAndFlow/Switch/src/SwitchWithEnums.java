
public class SwitchWithEnums {

	public static void main(String[] args) {

		Month month = 	Month.FEBRUARY;
		
		switch(month) {
		
		case JANUARY:
			System.out.println("The month is January");
			break;
		case FEBRUARY:
			System.out.println("The month is February");
			break;
		case MARCH:
			System.out.println("The month is March");
		default:
			System.out.println("There are no more options.");
			break;
		}
	}
}
