import java.io.BufferedReader;
import java.io.InputStreamReader;

public class SwitchWithInts {

	public static void main(String[] args) {
		String input = getInput("Enter a number between 1 and 12:");
		int month = Integer.parseInt(input);
		
		String declareMonth = "The month is ";
		
		switch (month) {
		case 1:
			System.out.println(declareMonth+"January");
			break;
		case 2:
			System.out.println(declareMonth+"February");
			break;
		case 3:
			System.out.println(declareMonth+"March");
			break;
		case 4:
			System.out.println(declareMonth+"April");
			break;
		default: 
			System.out.println("You chose another month.");
		}
	}
	
	private static String getInput(String prompt) {
		BufferedReader stdin = new BufferedReader(
				new InputStreamReader(System.in));

		System.out.print(prompt);
		System.out.flush();
		
		try {
			return stdin.readLine();
		} catch (Exception e) {
			return "Error: " + e.getMessage();
		}
	}

}
