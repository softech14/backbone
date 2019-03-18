//a+b ---> ab+
//abc-+de-fg-h+/* = (a+b-c)*(d-e)/(f-g+h)

public class TestInfix {
    
    private static boolean checkIfOperand(char c) {
        if((c > 'a' && c < 'z') ||
           (c > 'A' && c< 'Z'))
           return true;
    }
    
    public static void main(String[] a) {
        String input = "abc-+de-fg-h+/*";
        String result = process(input);
        System.out.println(result);
    }
    
    private String validate(String input) {
        if(input == null || input.trim().length() == 0) {
            return "BAD_REQUEST";
        }
        int operandCnt,operatorCnt;
        for(int i=0; i< input.length; i++) {
          if(checkIfOperand(ch)) { 
            operandCnt++;
          } else {
            operatorCnt++;
          }
        }
        if(operatorCnt != operandCnt-1) {
            return "BAD_REQUEST";
        }
    }
    private static String process(String input) {
        
        // validate input
        validate(input);
        
        Stack<String> stack = new Stack<>();
        for(int i=0; i< input.length; i++) {
            char ch = input.chartAt(i);
            char nextChar = input.chartAt(i+1);
            if(checkIfOperand(ch)) {
                stack.push(ch); //a,b,c
            } else {
                char operator = ch; // -
                char operand1 = stack.pop() //c
                char operand2 = stack.pop() //b
                String tmp = operand2 +  ch + operand1 // b-c
                if(checkIfOperand(nextChar)){
                   tmp = "("+tmp+")";
                } 
                stack.push(tmp); // a,b-c
            }
        }
        return stack.pop();
    }
}
