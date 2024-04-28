import 'package:flutter/material.dart';
import 'package:instagram/screens/bottomBar.dart';
import 'package:instagram/screens/login_screen.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    Future.delayed(
        const Duration(
          seconds: 3,
        ), () {
      Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) {
        return const LoginScreen();
      }));
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Expanded(
              child: Center(
                child: Image.network(
                  "https://cdn-icons-png.flaticon.com/256/1384/1384063.png",
                  height: 50,
                  width: 50,
                ),
              ),
            ),
            const SizedBox(height: 8),
            Text(
              "From",
              style: TextStyle(
                foreground: Paint()
                  ..shader = const LinearGradient(
                    colors: [
                      Colors.blue,
                      Colors.red,
                    ], // Customize gradient colors
                  ).createShader(const Rect.fromLTWH(
                      0.0, 0.0, 100.0, 50.0)), // Adjust Rect as needed
              ),
            ),
            const SizedBox(height: 1), // Adjust the height as needed
            const Text(
              "Facebook",
              style: TextStyle(
                  color: Colors.black,
                  fontSize: 20,
                  fontWeight: FontWeight.w500),
            ),
            SizedBox(
              height: 18,
            )
          ],
        ),
      ),
    );
  }
}
