using GraduationTracker.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraduationTracker
{
    public class Diploma : IGraduation<Diploma>
    {
        #region Properties
        public int Id { get; set; }
        public int Credits { get; set; }
        public int[] Requirements { get; set; }
        #endregion

        #region Methods
        public Diploma GetObjectByID(Diploma[] diplomas, int id)
        {
            Diploma diploma = null;

            for (int i = 0; i < diplomas.Length; i++)
            {
                if (id == diplomas[i].Id)
                {
                    diploma = diplomas[i];
                }
            }

            return diploma;
        }
        #endregion
    }
}
