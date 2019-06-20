using GraduationTracker.Interface;
namespace GraduationTracker
{
    public class Requirement : IGraduation<Requirement>
    {
        #region Properties
        public int Id { get; set; }
        public string Name { get; set; }
        public int MinimumMark { get; set; }
        public int Credits { get; set; }
        public int[] Courses { get; set; }
        #endregion

        #region Methods
        public Requirement GetObjectByID(Requirement[] requirements, int id)
        {
            Requirement requirement = null;

            for (int i = 0; i < requirements.Length; i++)
            {
                if (id == requirements[i].Id)
                {
                    requirement = requirements[i];
                }
            }
            return requirement;
        }
        #endregion
    }
}
