using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraduationTracker.Interface
{
    public interface IGraduation<T>
    {
        T GetObjectByID(T[] array, int id);
    }
}
