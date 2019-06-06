using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsvTransform
{
    public class FileWriter
    {
        static string outputPath = "../../Output_Result/" + DateTime.Now.ToString("yyyymmddhhmmss") + ".csv";
        static string header = "AccountCode,Name,Type,Open Date,Currency";

        public static void WriteCSV(string data){
            string outputResult = header + Environment.NewLine + data;

            // Write all the content to output file
            File.WriteAllText(outputPath, outputResult);
        }
    }
}
