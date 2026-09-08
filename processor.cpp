#include <fstream>
#include <string>

int main() {
    std::ifstream in("/input.txt");
    std::ofstream out("/output.txt");

    std::string line;
    while (std::getline(in, line)) {
        out << "Processed: " << line << "\n";
    }

    return 0;
}
