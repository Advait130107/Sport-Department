import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { updateCurrentStudent } from "../../auth/storage";
export default function EditProfileModal({ open, onClose, student, onSave }) {
  const [formData, setFormData] = useState({
    phone: "",
    address: "",
    bloodGroup: "",
    emergencyContact: "",
  });

  useEffect(() => {
    if (student) {
      setFormData({
        phone: student.phone || "",
        address: student.address || "",
        bloodGroup: student.bloodGroup || "",
        emergencyContact: student.emergencyContact || "",
      });
    }
  }, [student]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const updatedStudent = {
      ...student,
      ...formData,
    };

    updateCurrentStudent(updatedStudent);

    onSave(updatedStudent);

    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg border border-[#5B4537] bg-[#2B211B] text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-[#D4A373]">
            Edit Profile
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          {/* Phone */}
          <div>
            <label className="mb-2 block text-sm text-[#C9B7A6]">
              Phone Number
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full rounded-xl border border-[#5B4537] bg-[#1C1511] px-4 py-3 text-white outline-none focus:border-[#D4A373]"
            />
          </div>

          {/* Blood Group */}
          <div>
            <label className="mb-2 block text-sm text-[#C9B7A6]">
              Blood Group
            </label>

            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#5B4537] bg-[#1C1511] px-4 py-3 text-white outline-none focus:border-[#D4A373]"
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Emergency Contact */}
          <div>
            <label className="mb-2 block text-sm text-[#C9B7A6]">
              Emergency Contact
            </label>

            <input
              type="text"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
              placeholder="Emergency contact"
              className="w-full rounded-xl border border-[#5B4537] bg-[#1C1511] px-4 py-3 text-white outline-none focus:border-[#D4A373]"
            />
          </div>

          {/* Address */}
          <div>
            <label className="mb-2 block text-sm text-[#C9B7A6]">Address</label>

            <textarea
              rows={3}
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter address"
              className="w-full rounded-xl border border-[#5B4537] bg-[#1C1511] px-4 py-3 text-white outline-none focus:border-[#D4A373]"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-[#5B4537]"
            >
              Cancel
            </Button>

            <Button
              onClick={handleSubmit}
              className="bg-[#8B5E3C] hover:bg-[#A06B45]"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
