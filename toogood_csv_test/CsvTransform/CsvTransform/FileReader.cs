using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CsvTransform
{
    public class FileReader
    {
        public static string ReadStandardCSV(string standardPath, string customPath) {
            string finalOutputLine = "";

            // read all the content from standard csv
            string[] standardLines = File.ReadAllLines(@standardPath);
            // read all the content from custom csv
            string[] customLines = File.ReadAllLines(@customPath);

            // i=1  skip the header
            Dictionary<string, string> dictStandard = new Dictionary<string, string>();
            for(int i=1;i<standardLines.Length;i++)
            {
                string[] fields = standardLines[i].Split(',');
                string accountCode = (fields[0].Split('|'))[1];
                string name = fields[1];
                string type = GetType(fields[2]);
                string date = string.IsNullOrEmpty(fields[3]) ? "" : DateTime.ParseExact(fields[3], "dd-MM-yyyy", CultureInfo.InvariantCulture).ToString("yyyy-MM-dd");
                string currency = GetCurrency(fields[4]);

                // Dictionary with account cde as a key and combined string as value
                dictStandard.Add(accountCode, accountCode + "," + name + "," + type + "," + date + "," + currency);
            }

            finalOutputLine = CompareWithCustomData(dictStandard,customLines);

            return finalOutputLine;
        }

        public static string CompareWithCustomData(Dictionary<string,string> dic, string[] lines){
            string resultData = "";

            // Find if account code in the custom file also exist in standard file
            // If not exist, added to dictionary 
            for (int j = 0; j < lines.Length; j++)
            {
                string[] fields = lines[j].Split(',');

                string customName = fields[0];
                string customType = fields[1];
                string customCurrency = GetCurrency(fields[2]);
                string customOpenDate = "";
                string customAccountCode = fields[3];

                if(!string.IsNullOrEmpty(customAccountCode))
                {
                    if (dic.ContainsKey(customAccountCode))
                    {
                        break;
                    }
                    else
                    {
                        dic.Add(customAccountCode, customAccountCode + "," + customName + "," + customType + "," + customOpenDate + "," + customCurrency);
                    }
                }
                
            }

            resultData = CombineAllData(dic);

            return resultData;
        }

        public static string CombineAllData(Dictionary<string,string> dictionary) {
            string allData = "";
            
            foreach(KeyValuePair<string,string> dict in dictionary)
            {
                allData += dict.Value + Environment.NewLine;
            }

            return allData;
        }

        public static string GetType(string type){
            string result = "";

            switch(type)
            {
                case "1":
                    result = "Trading";
                    break;
                case "2":
                    result = "RRSP";
                    break;
                case "3":
                    result = "RESP";
                    break;
                case "4":
                    result = "Fund";
                    break;
                default:
                    break;
            }

            return result;
        }

        public static string GetCurrency(string currency) {
            string result = "";

            if ("C".Equals(currency) || "CD".Equals(currency)) 
            {
                result = "CAD";
            }
            else if ("U".Equals(currency) || "USD".Equals(currency)) 
            {
                result = "US";
            }

            return result;
        }
    }
}
