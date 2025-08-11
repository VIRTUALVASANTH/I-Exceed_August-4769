class stringconcat
{
    public String concatstring()
	{
	  String str="iexceed";
	  for(var i=0;i<100000;i++)
		{
	  		str+="technology";
		}
	  return str;
	}

    public String concatstringwithbuffer()
	{
	  StringBuffer sb=new StringBuffer("iexceed");
	  for(var i=0;i<100000;i++)
		{
	 		 sb.append("technology");
		}
	  return sb.toString();
	}	

    public String concatstringwithbuilder()
	{
	  StringBuilder sbb=new StringBuilder("iexceed");
	  for(var i=0;i<100000;i++)
		{
	 		 sbb.append("technology");
		}
	  return sbb.toString();
	}	
}

class strVSstrbuff
{
    public static void main(String asd[])
	{
	    stringconcat st=new stringconcat();
	    long stm=System.currentTimeMillis();
	    st.concatstring();
	    System.out.println(System.currentTimeMillis()-stm);
        long stmb=System.currentTimeMillis();
	    st.concatstringwithbuffer();
	    System.out.println(System.currentTimeMillis()-stmb);
        long sbb=System.currentTimeMillis();
	    st.concatstringwithbuilder();
	    System.out.println(System.currentTimeMillis()-sbb);
	}
}