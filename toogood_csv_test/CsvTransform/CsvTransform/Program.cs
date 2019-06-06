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
                string csvData = FileReader.ReadStandardCSV("../../Sample_Data/file1.csv", "../../Sample_Data/file2.csv");
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
