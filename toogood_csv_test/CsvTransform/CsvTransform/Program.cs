using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsvTransform
{
    class Program
    {
        static void Main(string[] args)
        {
            try { 
                string csvData = "";
                if(args.Length > 0)
                {
                    if (!string.IsNullOrEmpty(args[0]) && !string.IsNullOrEmpty(args[1]))
                    {
                        csvData = FileReader.ReadStandardCSV(args[0], args[1]);
                    }
                    else
                    {
                        //Only input 1 standard file
                        csvData = FileReader.ReadStandardCSV(args[0], "");
                    }
                }
                else
                {
                    csvData = FileReader.ReadStandardCSV("../../Sample_Data/file1.csv", "../../Sample_Data/file2.csv");
                }
                
                FileWriter.WriteCSV(csvData);

                Console.WriteLine("File is transformed successfully");
            }
            catch(Exception e){
                Console.WriteLine("Error during transformation");
                Console.WriteLine(e);
            }

            Console.ReadLine();
        }

    }
}
