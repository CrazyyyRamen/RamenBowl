using GraduationTracker.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraduationTracker
{
    public class Student : IGraduation<Student>
    {
        #region Class Variables
        private STANDING standing = STANDING.None;
        #endregion

        #region Properties
        public int Id { get; set; }
        public Course[] Courses { get; set; }
        public STANDING Standing { get { return standing; } set { standing = value;} }
        #endregion

        #region Methods
        public Student GetObjectByID(Student[] students, int id)
        {
            Student student = null;

            for (int i = 0; i < students.Length; i++)
            {
                if (id == students[i].Id)
                {
                    student = students[i];
                }
            }

            return student;
        }
        #endregion
    }
}
