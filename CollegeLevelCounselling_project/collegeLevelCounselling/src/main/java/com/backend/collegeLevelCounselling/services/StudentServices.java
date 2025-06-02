@Service
public class StudentServices implements StudentBussinessServicesInterface {

    @Autowired
    private StudentRepoInterface studentRepo;

    @Autowired
    private SeatBussinessServicesInterface seatServices;

    @Autowired
    private UserRepoInterface UserRepo;

    @Override
    public List<StudentModel> getTop15Students() {
        try {
            List<StudentModel> students = studentRepo.findAll();
            return students.stream()
                    .sorted((s1, s2) -> {
                        int statusCompare = s1.getStatus().compareTo(s2.getStatus());
                        return statusCompare == 0 ? Integer.compare(s1.getRank(), s2.getRank()) : statusCompare;
                    })
                    .limit(15)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            System.err.println("Error in getTop15Students: " + e.getMessage());
            return Collections.emptyList();
        }
    }

    @Override
    public List<StudentModel> getAllPendingStudents() {
        try {
            return studentRepo.findAll().stream()
                    .filter(student -> "pending".equalsIgnoreCase(student.getStatus()))
                    .sorted(Comparator.comparingInt(StudentModel::getRank))
                    .collect(Collectors.toList());
        } catch (Exception e) {
            System.err.println("Error in getAllPendingStudents: " + e.getMessage());
            return Collections.emptyList();
        }
    }

    @Override
    public boolean acceptStudent(String email) {
        try {
            List<StudentModel> students = studentRepo.findAll();
            for (StudentModel student : students) {
                if (student.getEmail().equals(email)) {
                    boolean value = seatServices.deleteSeat(student.getBranch());
                    if (value) {
                        student.setStatus("accept");
                        studentRepo.save(student);
                        return true;
                    }
                }
            }
        } catch (Exception e) {
            System.err.println("Error in acceptStudent: " + e.getMessage());
        }
        return false;
    }

    @Override
    public boolean rejectStudent(String email) {
        try {
            List<StudentModel> students = studentRepo.findAll();
            for (StudentModel student : students) {
                if (student.getEmail().equals(email)) {
                    student.setStatus("reject");
                    studentRepo.save(student);
                    return true;
                }
            }
        } catch (Exception e) {
            System.err.println("Error in rejectStudent: " + e.getMessage());
        }
        return false;
    }

    @Override
    public boolean editStudentDetails(StudentModel oldStudent) {
        try {
            List<StudentModel> students = studentRepo.findAll();
            for (StudentModel student : students) {
                if (student.getEmail().equals(oldStudent.getEmail())) {
                    student.setStatus(oldStudent.getStatus());
                    student.setRank(oldStudent.getRank());
                    student.setDate(oldStudent.getDate());
                    student.setAddress(oldStudent.getAddress());
                    student.setBranch(oldStudent.getBranch());
                    student.setRollno(oldStudent.getRollno());
                    student.setCategory(oldStudent.getCategory());
                    student.setFullName(oldStudent.getFullName());
                    student.setGender(oldStudent.getGender());
                    student.setPhoneno(oldStudent.getPhoneno());
                    student.setFatherName(oldStudent.getFatherName());
                    studentRepo.save(student);
                    return true;
                }
            }
        } catch (Exception e) {
            System.err.println("Error in editStudentDetails: " + e.getMessage());
        }
        return false;
    }

    @Override
    public Map<String, Pair<StudentModel, Integer>> getStudentDetails(Map<String, String> requestData) {
        Map<String, Pair<StudentModel, Integer>> studentData = new HashMap<>();
        try {
            List<StudentModel> students = studentRepo.findAll();

            List<StudentModel> acceptedStudents = new ArrayList<>();
            List<StudentModel> pendingStudents = new ArrayList<>();
            List<StudentModel> rejectedStudents = new ArrayList<>();

            for (StudentModel student : students) {
                switch (student.getStatus()) {
                    case "accept":
                        acceptedStudents.add(student);
                        break;
                    case "pending":
                        pendingStudents.add(student);
                        break;
                    case "rejected":
                        rejectedStudents.add(student);
                        break;
                }
            }

            acceptedStudents.sort(Comparator.comparingInt(StudentModel::getRank));
            pendingStudents.sort(Comparator.comparingInt(StudentModel::getRank));
            rejectedStudents.sort(Comparator.comparingInt(StudentModel::getRank));

            List<StudentModel> allSortedStudents = new ArrayList<>();
            allSortedStudents.addAll(acceptedStudents);
            allSortedStudents.addAll(pendingStudents);
            allSortedStudents.addAll(rejectedStudents);

            for (int i = 0; i < allSortedStudents.size(); i++) {
                StudentModel student = allSortedStudents.get(i);
                if (student.getEmail().equals(requestData.get("email"))) {
                    studentData.put("student", new Pair<>(student, i + 1));
                    return studentData;
                }
            }
        } catch (Exception e) {
            System.err.println("Error in getStudentDetails: " + e.getMessage());
        }
        return null;
    }

    @Override
    public boolean saveStudent(Map<String, String> requestData) {
        try {
            if (requestData.get("email") != null) {
                StudentModel student = new StudentModel();
                UserModel user = new UserModel();

                student.setEmail(requestData.get("email"));
                student.setFullName(requestData.get("fullName"));
                student.setPhoneno(requestData.get("phoneno"));
                student.setRollno(requestData.get("rollno"));
                student.setCategory(requestData.get("category"));
                student.setAddress(requestData.get("address"));
                student.setGender(requestData.get("gender"));
                student.setBranch(requestData.get("branch"));
                student.setStatus(requestData.get("status"));
                student.setDate(LocalDate.parse(requestData.get("date")));
                student.setFatherName(requestData.get("fatherName"));
                student.setRank(Integer.parseInt(requestData.get("rank")));
                student.setUser_id(null);

                studentRepo.save(student);

                user.setEmail(requestData.get("email"));
                user.setPassword(requestData.get("password"));
                user.setFullName(requestData.get("fullName"));
                user.setRole(requestData.get("role"));

                UserRepo.save(user);

                return true;
            }
        } catch (Exception e) {
            System.err.println("Error in saveStudent: " + e.getMessage());
        }
        return false;
    }
}
